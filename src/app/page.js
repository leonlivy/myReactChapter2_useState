import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "./HelloWorld"
//JSX apporach to create

const myP= (
  <p className ="this-is-a-class">
    Hello, World.
  </p>
);

const myA =(
  <div className="myname">
    LI Wei 
  </div>
)

const myName ="Wei"
const myPName=<p>Hello, {myName}!</p>
const myPExample =<p>The answer to 17+3 is: <strong>{17+3}</strong></p>
const myPExample3=<p>Hello World! {/*this is just a test element!*/}</p>
export default function Home() {
  myName;

  return (
    <main>
     <HelloWorld />
    </main>
    
  )
  
}
