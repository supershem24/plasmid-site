import plasmid from './Plasmid.png';
import './App.css';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rnpepenafurcryecsbog.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucGVwZW5hZnVyY3J5ZWNzYm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3Mjg3MTAsImV4cCI6MjAyOTMwNDcxMH0.MOSNYlFH9Qm5 - 2g1ca-ZKEn8KezmzOpBmV_zBBmDXmE";
const supabase = createClient(supabaseUrl, supabaseKey);


function Header() {
    return (
        <section className="sticky flex bg-gray-300 justify-around">
            <h2 className="flex-3 text-xl">Shawn's Smart Plasmids</h2>
            <p className="text-lg">Home</p>
            <p className="text-lg">Buy</p>
            <p className="text-lg">Submit your new Ideas!</p>
        </section>
    );
}

function Supa() {
    await supabase;
}

function TitleArea() {
    return (
        <>
            <section className="grid place-items-center m-10 bg-gray-300 h-96">
                <h1 className="text-7xl font-bold">Shawn's Smart Plasmids</h1>
                <img src={plasmid} alt="plasmid" className="object-center"></img>
            </section>
            <hr className="h-1 my-8 border-black"></hr>
        </>
    );
}

function RowOne(){
    return (
        <>
            <section className="flex flex-row-reverse">
                <section className="mx-8">
                    <img src="https://dummyjson.com/image/800x400?type=webp" alt="something"</img>
                </section>
                <p className="mx-8 text-lg">Creativity is an improtant part of what we do here, and we hope that you'll be creative with us!</p>
            </section>
            
            <hr className="h-1 my-8 border-black"></hr>
        </>
    );
}

function RowTwo() {
    return (
        <>
            <section className="flex flex-row">
                <section className="mx-8">
                    <img src="https://dummyjson.com/image/800x400?type=webp" alt="something"></img>
                </section>
                <p className="mx-8 text-lg">We hope you look forward to the creative Idea of the week, which will be showing up right here, and if you submit a form, it could be you!</p>
            </section>

            <hr className="h-1 my-8 border-black"></hr>
        </>
    );
}

function RowThree() {
    return (
        <>
            <section className="flex flex-col mx-auto justify-center items-center">
                <section className="mx-8">
                    <img src="https://dummyjson.com/image/800x400?type=webp" alt="something"></img>
                </section>
                <p className="mx-8 text-lg">Make sure to share your expierence with us by going to our submit your ideas page!</p>
            </section>

            <hr className="h-1 my-8 border-black"></hr>
        </>
    );
}

function App() {
  return (
    <div className="App">
          <Header />
          <TitleArea/>
          <RowOne />
          <RowTwo />
          <RowThree />

    </div>
  );
}

export default App;
