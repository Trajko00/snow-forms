import React from 'react';
import { useSnowForm, SortableForm2 } from '@snow-forms/module-producer';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      maxWidth: 600,
      padding: 10,
      margin: '0 auto',
      marginTop: '10%',
    }}
  >
    {children}
  </div>
);

export const MyPage = () => {
  // const {
  //   SnowForm,
  //   SnowFormInput,
  //   // connectForm,
  //   SnowFormSelect,
  //   SubmitButton,
  //   // fields,
  //   FormField,
  //   // ConnectedForm,
  // } = useSnowForm({
  //   collapsible: true,
  //   removable: true,
  //   indicator: true,
  //   // indentationWidth: 20,
  // });

  return (
    <>
      {/* <SnowForm {...connectForm}> */}
      {/* <SnowFormInput
        style={{ border: '2px solid red' }}
        placeholder="Ime Polja"
      />
      <SnowFormSelect />
      <SubmitButton label="DODAJ" /> */}
      <Wrapper>
        <SortableForm2 collapsible indicator removable />
      </Wrapper>
      {/* </SnowForm> */}
      <div style={{ margin: '100px' }}></div>
      {/* {fields?.map((field, index) => {
        return <FormField field={field} key={index} />;
      })} */}
    </>
  );
};
