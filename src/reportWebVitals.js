/**

With the reportWebVitals function,
you can send any of the results to an analytics endpoint to measure and track real user performance on your site.

@param {Function} onPerfEntry - A callback function that receives performance metrics.

Calls the provided function with metrics like CLS, FID, FCP, LCP, and TTFB.

@return {void}
*/

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
