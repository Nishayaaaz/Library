const About = () => {
  return (
    <div>
      <header>
        <h1>Library Management System Admin Dashboard</h1>
      </header>

      <div className="container">
        <div className="content">
          <h2>About Us</h2>
          <p>Welcome to our Library Management System Admin Dashboard!</p>
          <p>
            At our core, we are a dedicated team of developers and bibliophiles
            passionate about streamlining and enhancing the management of
            library resources. Our mission is to provide a robust, user-friendly
            platform that empowers library administrators to efficiently manage
            their collections, streamline operations, and offer an improved
            experience for their patrons.
          </p>

          <h3>Our Vision</h3>
          <p>
            We envision a future where library management is seamless,
            efficient, and adaptable to the ever-evolving needs of modern
            libraries. Our goal is to support libraries in their mission to
            foster learning, knowledge sharing, and community engagement through
            innovative technology solutions.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to create an intuitive and powerful admin dashboard
            for library management that:
          </p>
          <ul>
            <li>
              <strong>Simplifies Management:</strong> Easily manage book and
              author records, including adding, editing, and deleting entries.
            </li>
            <li>
              <strong>Enhances Efficiency:</strong> Reduce administrative
              overhead with a user-friendly interface and powerful form
              validation using Formik.
            </li>
            <li>
              <strong>Supports Libraries:</strong> Provide tools and features
              that support the diverse needs of library administrators, helping
              them maintain accurate records and offer a better service to their
              community.
            </li>
            <li>
              <strong>Promotes Accessibility:</strong> Ensure the platform is
              accessible and responsive, providing a seamless experience across
              all devices.
            </li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Book Management:</strong> Admins can effortlessly add,
              edit, and delete book records, complete with title, author, ISBN
              number, and publication date.
            </li>
            <li>
              <strong>Author Management:</strong> Manage author profiles with
              ease, including name, birth date, and biography details.
            </li>
            <li>
              <strong>Validation:</strong> Formik is used for robust form
              validation, ensuring data integrity and accuracy.
            </li>
            <li>
              <strong>Responsive Design:</strong> Our dashboard is designed to
              be clean, intuitive, and responsive, providing a smooth experience
              on both desktop and mobile devices.
            </li>
          </ul>

          <h3>Our Commitment</h3>
          <p>
            We are committed to continuous improvement and innovation, always
            seeking feedback from our users to enhance our platform further. Our
            team is dedicated to providing exceptional support and ensuring that
            our library management system meets the highest standards of quality
            and reliability.
          </p>
          <p>
            Thank you for choosing our Library Management System Admin
            Dashboard. Together, we can make library management more efficient
            and effective, allowing libraries to focus on what they do best:
            fostering a love for reading and learning in their communities.
          </p>
        </div>
      </div>

      <footer className="text-center">
        <p>
          &copy; 2024 Library Management System Admin Dashboard. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default About