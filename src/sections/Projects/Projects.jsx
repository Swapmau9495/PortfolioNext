import styles from './ProjectsStyles.module.css';
import newsicon from '../../assets/newsicon.ico';
import ProjectCard from '../../common/ProjectCard';
import flightgo from '../../assets/flightgo.webp'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          className={styles.imagecontainer}
          src={flightgo}
          link="https://669e79e737baf56b66c333a0--heroic-mooncake-46a99c.netlify.app/"
          h3="FlightGo"
          p="Flight Booking app"
        />
        <ProjectCard
        className={styles.image2container}
          src={newsicon}
          link="https://66aa1944ae519011858b203b--gleeful-cat-7314f9.netlify.app/"
          h3="News24"
          p="NewsApp"
        />
       
      </div>
    </section>
  );
}

export default Projects;
