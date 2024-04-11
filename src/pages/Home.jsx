import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function Home({ setHome, homeVal }) {
  return (
    <>
      <Link to="#">
        <div className="underline ml-[90%]" style={{ color: "#9FB2FF" }}>
          Skip
        </div>
      </Link>
      <div>
        <img src="/images/1.png" className="mx-16 my-20" width="75%" />
        <div className="ml-4">
          <h1 className="font-bold mb-8 text-xl" style={{ fontSize: "1.8rem" }}>
            Track Your Goal
          </h1>
          <div>
            <p>
              Dont't worry if you have trouble determining your goals. We can
              help you determine your goals and track your goals.
            </p>

            <Link to="/secondPage">
              <div className="circle-container ml-[80%] mt-[10%]">
                <div className="circle"></div>
                <div className="outer-border"></div>
                <MdArrowForwardIos className="arrow-icon mt-[-38px] ml-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
