import { AutoCompleteInput } from "@/components/AutoCompleteInput";
import { RaInput } from "@/components/RaInput";
import { ReferenceInput } from "@/components/ReferenceInput";
import { Button } from "@/components/ui/button";
import { EditBase, Form, required, useEditContext } from "ra-core";

export const ProductEdit = () => (
  <EditBase mutationMode="pessimistic">
    <ProductEditView />
  </EditBase>
);

const ProductEditView = () => {
  const context = useEditContext();

  if (context.isLoading || !context.record) {
    return null;
  }

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight mb-8">
        {context.record.reference}
      </h2>

      <Form>
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <RaInput source="reference" label="Reference" validate={required()} />
          <ReferenceInput source="category_id" reference="categories">
            <AutoCompleteInput label="Category" />
          </ReferenceInput>
          <div className="flex flex-row gap-4">
            <Button className="btn btn-primary" type="submit">
              Save
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};
