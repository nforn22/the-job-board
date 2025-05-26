function Job({ className, title, contractType, country, city }) {
    return (
      <div className={`job ${className}`}>
        <h2>{title}</h2>
        <p>
          {contractType} - {country} - {city}
        </p>
      </div>
    );
}
  
export default Job;