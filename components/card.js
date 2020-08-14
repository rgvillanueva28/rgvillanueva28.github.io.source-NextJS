function Card(props) {
  return (
    <div
      className={
        "m-5 sm:m-10 md:m-16 py-10 px-2 sm:px-5 md:px-10 lg:px-16 rounded-lg shadow-lg bg-gray-100  items-center " +
        props.className
      }
    >
      {props.children}
    </div>
  );
}

export default Card;