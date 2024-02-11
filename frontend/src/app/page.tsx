import { getExamples } from 'src/services/exampleService';
import ExamplesList from './example-domain/ExamplesList';
import styles from './page.module.css';
import CreateExample from './example-domain/CreateExample';

export default async function Home() {
  const examples = await getExamples();
  return (
    <main className={styles.main}>
      <h1>Example NextJS Application</h1>
      <CreateExample />
      <ExamplesList examples={examples}></ExamplesList>
    </main>
  );
}
