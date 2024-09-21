import styles from './foo.module.css';

/* eslint-disable-next-line */
export interface FooProps {}

export function Foo(props: FooProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Foo!</h1>
    </div>
  );
}

export default Foo;
