/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
    setHtmlAttributes({
      className: 'new-head-class'
    });
    setBodyAttributes({
        className: 'new-body-class'
      });
  };
  
