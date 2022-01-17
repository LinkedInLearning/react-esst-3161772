import propTypes from "prop-types";

export function Course(props) {
  return (
    <p>
      <strong>{props.title}</strong>
      <br />
      <mark>{props.author}</mark>
    </p>
  );
}

Course.propTypes = {
  title: propTypes.string,
};

Course.defaultProps = {
  title: 'Bitte "title" angeben',
  author: 'Bitte "author" angeben',
};

Course.displayName = "LinkedInCourse";
