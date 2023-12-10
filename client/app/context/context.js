"use client"

import { createContext, useContext, useState } from "react";
import { AxiosPost } from "../lib/axios";
import { BlockchainConfig } from "./blockchainContext";
export const Message_data = createContext(null);
export function ContextProvider({ children }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [inputArr,setInputArr]=useState([]);
  const [proposalArr, setProposalArr] = useState([]);
// console.log(inputArr)
const propqns=["Enhance community engagement through monthly town hall meetings","Implement a decentralized grants program to fund community-driven initiatives","Integrate NFTs to enhance DAO membership and governance token representation","Collaborate with external projects for cross-platform incentives","Implement policies for diverse representation in governance roles","Introduce governance badges or NFTs as recognition for active participants"," Create educational initiatives to promote inclusivity within the community","Implement a clear and accessible dispute resolution process","Facilitate open and constructive dialogue between conflicting parties","Upgrade DAO infrastructure for better scalability and adaptability"]
const qns=["What motivates you to participate in a DAO","How would you describe your preferred level of involvement in DAO decision-making","Describe your approach to assessing the potential impact of a DAO proposal on the community","In your view, what role should community sentiment play in DAO decision-making"," How do you prioritize between short-term gains and long-term sustainability when evaluating DAO proposals","Describe the type of proposals you believe should require a higher quorum for approval"," How would you contribute to resolving conflicts within the DAO community"," Explain your criteria for supporting a proposal aimed at modifying the DAO`s governance structure","What role do you see technology playing in enhancing DAO governance","Describe your strategy for balancing individual interests with the collective goals of the DAO"];

const {currentAccount,RegisterContract} = useContext(BlockchainConfig);
    // await handleUserSubmit();
    const [title, setTitle] = useState();
const [formSubmitting, setFormSubmitting] = useState(false);
    const handleUserSubmit = async()=>{
      setFormSubmitting(true);
      console.log("submitting",currentAccount,password,"");

      console.log("qna",inputArr);
      console.log("prqna",proposalArr);
      const dqf =[];
      const dpf =[];

      for(var i=0;i<10;i++){
        console.log({question:qns[i],res:inputArr[0][`question${i+1}`]})
        dqf.push({question:qns[i],res:inputArr[0][`question${i+1}`]});
        dpf.push({proposal:propqns[i],vote:proposalArr[0][`question${i+1}`]});
        


      }
      console.log("qna",JSON.stringify(dqf));
      console.log("prqna",JSON.stringify(dpf));
      await RegisterContract()
      
      const data= await AxiosPost('users/add',{
        user_address:currentAccount,
          password:password,
          user_characteristics_beh_df:JSON.stringify(dqf)+","+JSON.stringify(dpf)
    })
    if(data.status==201){
      alert('added');
    }
    setFormSubmitting(false);

    }
    return (
      <Message_data.Provider value={{ username,title, setTitle, setUsername, password, setPassword ,inputArr,setInputArr,handleUserSubmit,proposalArr,formSubmitting, setFormSubmitting,   setProposalArr}}>
        {children}
      </Message_data.Provider>
    );
  }