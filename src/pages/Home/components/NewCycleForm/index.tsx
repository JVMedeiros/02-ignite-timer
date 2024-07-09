import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle }= useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
    <label htmlFor="task">Vou trabalhar em</label>
    <TaskInput 
      id="task" 
      list="task-sugestions" 
      placeholder="Dê um nome para o seu projeto"
      disabled={!!activeCycle}
      {...register('task')}
    />

    <datalist id="task-sugestions">
      <option value="HStory Front"></option>
      <option value="HStory Back"></option>
      <option value="Ignite React"></option>
      <option value="Ignite Node"></option>
      <option value="Ignite IA"></option>
      <option value="Ignite"></option>
    </datalist>

    <label htmlFor="minutesAmount">durante</label>
    <MinutesAmountInput 
      type="number" 
      id="minutesAmount" 
      placeholder="00" 
      step={5} 
      min={5} 
      max={60}
      disabled={!!activeCycle}
      {...register('minutesAmount', { valueAsNumber: true })}

    />

    <span>minutos.</span>
  </FormContainer>
  )
}