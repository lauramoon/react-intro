const Tweet = ({ username, name, date, message }) => (
  <div>
    <p>@ {username}</p>
    <p>{name}</p>
    <p>
      <small>{date}</small>
    </p>
    <p>{message}</p>
  </div>
);
