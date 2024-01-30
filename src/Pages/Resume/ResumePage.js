// import { useState, useRef, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// //Do not remove the imports below they disable the annotation layer and text layer.
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// import download from "../../Assets/download.svg"
// import './ResumePage.scss';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function ResumePage() {
//     const [pageNumber] = useState(1);
//     const [pageWidth, setPageWidth] = useState(window.innerWidth);
//     const containerRef = useRef();

//     useEffect(() => {
//         const handleResize = () => {
//             setPageWidth(containerRef.current.clientWidth);
//         };

//         window.addEventListener('resize', handleResize);
//         handleResize();

//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const resumePDF = process.env.PUBLIC_URL + '/ncResume.pdf';

//     return (
//         <div className='resume-layout'>
//             <div className="resume" ref={containerRef}>
//                 <a href={resumePDF} download className="download-button"><img className='resume__download' src={download} alt="Download" /></a>
//                 <Document file={resumePDF}>
//                     <Page pageNumber={pageNumber} width={pageWidth} />
//                 </Document>
//             </div>
//         </div>
//     );
// }

// export default ResumePage;
