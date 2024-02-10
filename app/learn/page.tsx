import NavStatic from "@/components/nav/NavStatic";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";

const Learn = () => {
  return (
    <>
      <NavStatic />
      <div className={styles.container}>
        <h1 className={styles.heading}>Learn to Meditate</h1>

        <ol>
          <li>
            <h3>Find a Quiet Space:</h3>
            <p>
              Choose a quiet and comfortable place where you won&apos;t be
              easily disturbed. It could be a corner of a room or a peaceful
              spot outdoors.
            </p>
          </li>
          <li>
            <h3>Comfortable Seating:</h3>
            <p>
              Sit in a comfortable position. You can sit on a chair with your
              feet flat on the floor or cross-legged on a cushion. Keep your
              back straight and your hands resting on your lap.
            </p>
          </li>
          <li>
            <h3>Focus on Breath</h3>
            <p>
              Close your eyes and bring your attention to your breath. Take
              deep, slow breaths. Notice the sensation of the breath as you
              inhale and exhale.
            </p>
          </li>
          <li>
            <h3>Mindful Awareness:</h3>
            <p>
              Allow your mind to focus on the present moment. Be aware of each
              breath without judgment. If your mind starts to wander, gently
              bring it back to the breath.
            </p>
          </li>
          <li>
            <h3>Start with Short Sessions:</h3>
            <p>
              Especially if you&apos;re a beginner, start with short meditation
              sessions. Aim for 5-10 minutes initially and gradually increase
              the duration as you become more comfortable.
            </p>
          </li>
          <li>
            <h3>Let Go of Expectations:</h3>
            <p>
              Meditation is not about achieving a particular state; it&apos;s
              about being present. Don&apos;t worry if your mind wanders;
              it&apos;s a normal part of the process.
            </p>
          </li>
          <li>
            <h3>Use Guided Meditations:</h3>
            <p>
              We&apos;re hoping to add a guided meditation feature to this app
              soon. They can provide structure and help you focus during your
              practice.
            </p>
          </li>
          <li>
            <h3>Be Consistent:</h3>
            <p>
              Establish a regular meditation routine. Consistency is more
              important than duration. Even a few minutes of daily practice can
              make a difference.
            </p>
          </li>
          <li>
            <h3>Explore Different Techniques:</h3>
            <p>
              There are various meditation techniques such as mindfulness,
              loving-kindness, or body scan. Explore different methods to find
              what resonates best with you.
            </p>
          </li>
          <li>
            <h3>Patience and Compassion:</h3>
            <p>
              Be patient with yourself. Meditation is a skill that develops over
              time. Approach your practice with self-compassion and without
              judgment. Remember, there&apos;s no right or wrong way to
              meditate. The key is to find a practice that suits you and brings
              a sense of calm and presence to your life.
            </p>
          </li>
        </ol>
        <p>
          Remember, there&apos;s no right or wrong way to meditate. The key is
          to find a practice that suits you and brings a sense of calm and
          presence to your life.
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Learn;
