import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/Cycles";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { InputDefault } from "../DefaultInput/InputDefault";


export function MainForm(){
    return(
          <form className='form'>
            <div className="formRow">
              <InputDefault type="text" id="myInput"  placeholder='Digite sua tarefa:' labelText="Task"  />
            </div>
            <div className="formRow">
              <p>algum texto...</p>
            </div>

            <div className="formRow">
              <Cycles />
            </div>

            <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green"/>
            {/* <DefaultButton icon={<StopCircleIcon />} color="green"/> */}
            </div>
          </form>
    )
}