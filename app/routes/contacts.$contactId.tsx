import { useParams } from "@remix-run/react";

export default function Contact() {
  const params = useParams();

  console.log(params, "params가 멀까염?");

  // params 는 $ 뒤에 붙은 애로 결론이 났다!
  // params === contactId

  return (
    <div id="contact">
      <p> 오잉 !! 나는 params!! {params.contactId} ㅋㅋ </p>
    </div>
  );
}
