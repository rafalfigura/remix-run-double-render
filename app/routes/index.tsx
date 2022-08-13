import {ActionFunction, json} from "@remix-run/node";
import {Form, useActionData} from "@remix-run/react";

export const action: ActionFunction = async () => {
  return json({ d: 'ok' });
};

export default function Index() {
    const actionData = useActionData();
    console.log(`index`, actionData)
    return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        {JSON.stringify(actionData)}
      <Form method="post">
        <button type={`submit`}>submit</button>
        <input type={`text`} name={`data`} defaultValue={`asdasd`}></input>
      </Form>
    </div>
  );
}
