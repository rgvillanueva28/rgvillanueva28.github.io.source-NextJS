function Card(props: any) {
  return (
    <div
      className={
        "mx-5 sm:mx-10 md:mx-16 py-10 px-2 sm:px-5 md:px-10 lg:px-16 rounded-lg shadow-lg bg-accent-mid  items-center " +
        props.className
      }
    >
      {props.children}
    </div>
  );
}

export default Card;
