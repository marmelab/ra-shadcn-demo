import { InputProps, ValidationError, useInput } from "ra-core";
import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { ControllerFieldState } from "react-hook-form";

export const RaInput = (props: InputProps) => {
	const { field, fieldState } = useInput(props);

	return (
		<FormItem>
			<FormLabel>{props.label}</FormLabel>
			<FormControl>
				<Input {...field} />
			</FormControl>
			<FormDescription>{props.helperText}</FormDescription>
			<Error fieldState={fieldState} />
		</FormItem>
	);
};

const Error = (props: { fieldState: ControllerFieldState }) => {
	if (
		!props.fieldState.invalid ||
		!props.fieldState.isTouched ||
		!props.fieldState.error?.message
	) {
		return null;
	}

	return (
		<p className="text-sm font-medium text-destructive">
			<ValidationError error={props.fieldState.error?.message} />
		</p>
	);
};
