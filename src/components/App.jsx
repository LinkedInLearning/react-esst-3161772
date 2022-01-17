import React from "react";
import { Course } from "./Course";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headline}</h1>

        <Course
          title="Nebenprojekte als Softwareentwickler:in nutzen"
          author="Kai Klostermann"
        />

        <Course title="React Hooks Grundkurs" author="David Lorenz" />

        <Course author="Happy Cat" />
      </div>
    );
  }
}

App.defaultProps = {
  headline: "Meine coolen Kurse",
};

App.displayName = "Courses";
