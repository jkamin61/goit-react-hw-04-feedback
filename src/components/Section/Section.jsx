import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={"section"}>
    <h1 className={"section__title"}>{title}</h1>
    {children}
  </section>
);

export default Section

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}
