import {
    Form,
    FormControl,
    FormDescription,
    FormField as RHFFormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Controller, Control, Path, FieldValues } from "react-hook-form";
  
  interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: "text" | "email" | "password" | "file";
  }
  
  export default function FormField<T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    type = "text",
  }: FormFieldProps<T>) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
              <Input className="py-5" type={type} placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
  