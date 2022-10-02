import RestoInfo from "../../CommonComp/RestoInfo"

export default function RestoLList({ restos }: any) {
  return (
    <>
      {restos.map((resto: any, index: number) => {
        return (
          <div key={index}>
            {index}
            {resto.name}
          </div>
        )
      })}
    </>
  )
}
