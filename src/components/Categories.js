import Alert from 'react-bootstrap/Alert';

function Categories() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} step.
        </Alert>
      ))}
    </>
  );
}

export default Categories;