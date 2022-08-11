import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import he from "he";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // for the code editor
  const [htmlCode, setHtmlCode] = useState(""); // the html code
  const [cssCode, setCssCode] = useState(""); // the css code
  const [jsCode, setJsCode] = useState(""); // the js code
  const [sourceCode, setSourceCode] = useState(""); // the final source code

  // templates fetched here
  const [templates, setTemplates] = useState([]);

  // for registration/login
  const [userHere, setUserHere] = useState({
    username: "",
    fullname: "",
    email: "",
    age: "",
    occupation: "",
    memberbio: "",
  });

  const [userInfo, setUserInfo] = useState({});

  const [isPassMatch, setIsPassMatch] = useState(true);

  // change the user state
  const handleChange = (e) => {
    e.preventDefault();
    setUserHere({
      ...userHere,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      if (e.target.value !== userHere.password) {
        setIsPassMatch(false);
      }
    }
  };

  // user login state
  const [login, setLogin] = useState(false);

  // register the user
  const navigate = useNavigate();

  const handleuserRegistration = (e) => {
    e.preventDefault();
    setUserHere({
      ...userHere,
      username: e.target.username.value,
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      age: e.target.age.value,
      occupation: e.target.occupation.value,
      memberbio: e.target.memberbio.value,
      agreed: e.target.agreed.checked,
    });

    // posting the user to the database
    axios
      .post("/api/member", userHere)
      .then((res) => {
        console.log("the response from the registration", res);
        if (res.status === 201) {
          setUserHere({
            username: "",
            fullname: "",
            email: "",
            age: "",
            occupation: "",
            memberbio: "",
          });
          setLogin(true);
          navigate("/members/landing");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // for setting the code in the editor
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSourceCode(
        `
                    <html>
                        <body>${htmlCode}</body>
                        <style>${cssCode}</style>
                        <script type="text/javascript">${jsCode}</script>
                    </html>
                `
      );
    }, 100);
    return () => clearTimeout(timeOut);
  }, [htmlCode, cssCode, jsCode]);

  // placeholders to fill in the editor
  let htmlPlaceHolder = `
    <html>
      <body>
        please enter the html code that goes here...
      </body>
    </html>
  `;

  let cssPlaceHolder = `
    /* please enter the css code that goes here... */
  `;

  let jsPlaceHolder = `
    /* please enter the js code that goes here... */
  `;

  // console.log("the user here", userInfo);

  let convertedCode = he.encode(sourceCode);


  // console.log("the user source code", sourceCode);

  // console.log("the user converted code", convertedCode);


  const handleDraftSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // posting the draft to the database
    axios
      .post(`/api/members/drafts`, {
        email: userInfo.email,
        html: he.encode(htmlCode),
        css: he.encode(cssCode),  
        js: he.encode(jsCode),
        user: userInfo.username,
      })
      .then((res) => {
        navigate("/members/drafts");
        console.log("the response from the draft", res);
        if (res.status === 201) {
          setHtmlCode("");
          setCssCode("");
          setJsCode("");
          setSourceCode("");
          navigate("/members/drafts");
        }
      })
      .catch((err) => {
        console.log(err);
      });

  }

  const deleteDraft = (e, draftId) => {
    e.preventDefault();
    e.stopPropagation();
    // deleting the draft from the database

    console.log(e)
    axios
      .delete(`/api/members/drafts/${draftId}`)
      .then((res) => {
        console.log("the response from the draft", res);
        if (res.status === 200) {
          window.location.reload();
          navigate("/members/drafts");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <UserContext.Provider
      value={{
        htmlCode,
        setHtmlCode,
        cssCode,
        setCssCode,
        jsCode,
        setJsCode,
        sourceCode,
        setSourceCode,
        htmlPlaceHolder,
        cssPlaceHolder,
        jsPlaceHolder,
        userInfo,
        setUserInfo,
        handleChange,
        handleuserRegistration,
        login,
        templates,
        setTemplates,
        isPassMatch,
        handleDraftSave,
        deleteDraft,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
