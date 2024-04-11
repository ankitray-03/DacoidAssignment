import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function SecondHome() {
  return (
    <>
      <Link to="#">
        <div className="underline ml-[90%]" style={{ color: "#9FB2FF" }}>
          Skip
        </div>
      </Link>
      <div>
        <img src="/images/2.png" className="mx-16 my-20" width="80%" />
        <div className="ml-4">
          <h1 className="font-bold mb-8 text-xl" style={{ fontSize: "1.8rem" }}>
            Get Burn
          </h1>
          <div>
            <p>
              Lets keep burning to achieve your goals hurts only temporarily, if
              you give up now you will be in pain forever
            </p>

            <Link to="/">
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

export default SecondHome;
