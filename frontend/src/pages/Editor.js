import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import { set } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; 

export default function Editor_component() {
  const [code,setCode] = useState('// write your c++ code here :]\n \n#include<bits/stdc++.h> \n \nusing namespace std;\n \nint main() {\n \n \treturn 0; \n}');
  const [output,setOutput] = useState('');

  const submission_id = uuidv4(); 
   
  const handleSubmit = async () => {
      console.log(code); // for debugging 
      try {
          const response = await fetch('http://localhost:4000/run-code', {
              method: 'POST',
              body: JSON.stringify({ code: code }),
              headers: { 'Content-Type': 'application/json' },
          });
          if (!response.ok) {
            throw new Error(response.statusText);
          }
       } catch (err) {
          console.error(err);
       } 
       
      console.log("code has been executed");

       try {
           const response = await fetch("http://localhost:4000/output");
           if(!response.ok) {
               throw new Error(response.statusText);
           }
           const result = await response.text();
           setOutput(result);
       } catch(err) {
           console.log(err);
       }
    
       // send post request to submissions page with code and score
       try {
              const response = await fetch('http://localhost:4000/submissions', {  
                method: 'POST',
                body: JSON.stringify({ submission_id: submission_id, submission_code: code, submission_score: output }), 
                headers: { 'Content-Type': 'application/json' }, 
              });
              console.log(submission_id); 
              
              if (!response.ok) {
                 throw new Error(response.statusText);
              }
        } catch (err) {
                console.error(err);
        }
  };

    return (
        <div className="Editor_comp">
            <h1 className="heading">Code Editor 👇</h1>
            <div className="Code-Editor">
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.c)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                    }}
                />
            </div> 
            <button onClick={handleSubmit}>Run Code</button>
            <div className="output-test">
                <h2>Output: {output}</h2> 
            </div>
        </div>
    )
}
