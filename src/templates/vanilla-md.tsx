import { graphql } from "gatsby";
import React, { Component } from "react";
import "./vanilla-md.css";

export interface IProps {
  data: any;
}

export default class extends Component<IProps> {
  public render() {
    const { markdownRemark } = this.props.data; // data.markdownRemark holds our post data
    const { html } = markdownRemark;
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css"
        />
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
