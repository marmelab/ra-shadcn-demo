import { ResourceProps } from "ra-core";
import { ProductList } from "./ProductList";

export const products: ResourceProps = {
	name: "products",
	list: ProductList,
	recordRepresentation: "reference",
};
