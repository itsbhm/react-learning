import PropTypes from 'prop-types';

function NumberDisplay({ number }) {
  return <div>The number is: {number}</div>;
}

NumberDisplay.propTypes = {
  number: PropTypes.number.isRequired
};

// Usage
<NumberDisplay number={42} />

