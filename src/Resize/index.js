import ResizePanel from "react-resize-panel";
import Footer from "./Footer";
import Header from "./Header";
import style from "./App.css";
import classNames from "classnames/bind";
import Split from "react-split";
let cx = classNames.bind(style);
function Wrap() {
  return (
    <Split
      sizes={[100]}
      minSize={100}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="vertical"
      cursor="col-resize"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <Split className="flex" sizes={[70, 30]} minSize={[10, 40, 90]}>
        <div>
          <Split
            sizes={[25, 75]}
            minSize={100}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="vertical"
            cursor="col-resize"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            <div>page 2</div>
            <div>Footer</div>
            {/* <Header />
      <Footer /> */}
          </Split>
        </div>
        <div>page 2</div>
        {/* <div>page 3</div> */}
      </Split>
      {/* <div>Footer</div> */}
      {/* <Header />
      <Footer /> */}
    </Split>
    // <div className="resize-wrap">
    //   <div className={cx("container")}>
    //     {/* <ResizePanel direction="s">
    //     <div className={cx("header", "panel")}>
    //       <span>header</span>
    //     </div>
    //   </ResizePanel> */}
    //     <div className={cx("body")}>
    //       <ResizePanel direction="e" style={{ flexGrow: "1" }}>
    //         <div className={cx("sidebar", "withMargin", "panel")}>
    //           <div className={cx("container")}>
    //             {/* <ResizePanel direction="s">
    //     <div className={cx("header", "panel")}>
    //       <span>header</span>
    //     </div>
    //   </ResizePanel> */}
    //             <div className={cx("body")}>
    //               <div className={cx("content", "panel")}>
    //                 <Header />
    //               </div>
    //               {/* <ResizePanel
    //         direction="w"
    //         style={{ width: "400px" }}
    //         handleClass={style.customHandle}
    //         borderClass={style.customResizeBorder}
    //       >
    //         <div className={cx("sidebar", "panel")}>right panel</div>
    //       </ResizePanel> */}
    //             </div>

    //             <ResizePanel direction="n" style={{ height: "200px" }}>
    //               <div className={cx("footer", "panel")}>
    //                 <div className={cx("footerArea")}>
    //                   <div className={cx("footerAreaContent")}>
    //                     {/* <span>footer area, min height: 100px</span> */}
    //                     <Footer />
    //                   </div>
    //                 </div>
    //                 {/* <div className={cx("footerBottomBar")}>bottom bar</div> */}
    //               </div>
    //             </ResizePanel>
    //           </div>
    //         </div>
    //       </ResizePanel>
    //       <div className={cx("content", "panel")}>
    //         <Header />
    //       </div>
    //       {/* <ResizePanel
    //         direction="w"
    //         style={{ width: "400px" }}
    //         handleClass={style.customHandle}
    //         borderClass={style.customResizeBorder}
    //       >
    //         <div className={cx("sidebar", "panel")}>right panel</div>
    //       </ResizePanel> */}
    //     </div>
    //   </div>
    // </div>
    // <>
    //   <ResizePanel
    //     direction="n"
    //     style={{ height: "400px" }}
    //     handleClass="customHandle"
    //     borderClass="customResizeBorder"
    //   >
    //     <Header />
    //   </ResizePanel>
    //   <ResizePanel direction="n">
    //     <Footer />
    //   </ResizePanel>
    // </>
  );
}
export default Wrap;
