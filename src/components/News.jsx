import React, { Component } from "react";
import NewsBox from "./NewsBox";
import Spin from "./Spin";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      pagesize: 12,
      country: "in",
      totalResults: 0,
      category: this.props.category,
      // key: "53d04b7b9cc4443e9ead2e4a9cf55e55",
      query:this.props.query,
      key:'27ace50c4e934958a512f3cf66273053'
    };
  }

  async updateapi() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.state.category}&country=${this.state.country}&apiKey=${this.state.key}&pagesize=${this.state.pagesize}&page=${this.state.page}`;
    if(this.state.query&&this.state.category==="")
    url=`https://newsapi.org/v2/everything?&q=${this.state.query}&apiKey=${this.state.key}&pagesize=${this.state.pagesize}&page=${this.state.page}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let usedata = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: usedata.articles,
      loading: false,
      totalResults: usedata.totalResults,
    });

    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateapi();
  }

  fetchmore = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.state.category
    }&country=${this.state.country}&apiKey=${this.state.key}&pagesize=${
      this.state.pagesize
    }&page=${this.state.page + 1}`;
    if(this.state.query&&this.state.category==="")
    url=`https://newsapi.org/v2/everything?&q=${this.state.query}&apiKey=${this.state.key}&pagesize=${this.state.pagesize}&page=${this.state.page+1}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let usedata = await data.json();
    this.props.setProgress(70);
    this.setState({
       page:this.state.page+1,
      articles: this.state.articles.concat(usedata.articles),
    });
    this.props.setProgress(100);
  };

  // prevfun = async () => {
  //   await this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateapi();
  // };
  // nextfun = async () => {
  //   await this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateapi();
  // };

  render() {
    return (
      <div style={{ marginTop: "70px" }}>
        <h1 className="text-center">
          MyNews{" "}
          <p className="text-capitalize">
            Top headlines on {this.state.category}{this.state.query}
          </p>
        </h1>

        {this.state.loading && <Spin />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchmore}
          hasMore={this.state.articles.length !== this.state.totalResults} // Replace with a condition based on your data source
          loader={<Spin />}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            {this.state.articles &&
              this.state.articles.map((e) => {
                return (
                  e.urlToImage && (
                    <div key={e.url}>
                      <NewsBox
                        title={e.title}
                        imageurl={e.urlToImage}
                        description={e.description}
                        link={e.url}
                        publishedAt={e.publishedAt}
                        name={e.source.name}
                      />
                    </div>
                  )
                );
              })}
          </div>
        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between p-4">
          <button
            type="button"
            disabled={this.state.page === 1}
            className="btn btn-secondary"
            onClick={this.prevfun}
          >
            &larr; prev
          </button>
          <button
            type="button"
            disabled={
              this.state.page >= this.state.totalResults / this.state.pagesize
            }
            className="btn btn-secondary"
            onClick={this.nextfun}
          >
            next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
