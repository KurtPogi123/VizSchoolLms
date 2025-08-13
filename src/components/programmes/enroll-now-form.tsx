import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";

import { enrollNowSchema, type EnrollNowSchema } from "../../zod-schema";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { ScrollArea } from "../ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

function EnrollNowForm() {
  const form = useForm<EnrollNowSchema>({
    resolver: zodResolver(enrollNowSchema),
  });

  function onSubmit(values: EnrollNowSchema) {
    try {
      console.log(values);
      toast.success("Class slot submitted! 🎉", {
        description: "We’ll send you a confirmation once it’s approved.",
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid items-center justify-center grid-cols-1 lg:grid-cols-4 gap-4 py-6 lg:py-0">
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput placeholder="91234567" {...field} defaultCountry="SG" international />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="parent_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter parent name" className="text-sm xl:!text-base py-5 md:py-6" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="academic_level"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-11/12 text-sm xl:!text-base py-5 md:py-6">
                    <SelectValue placeholder="Select child’s academic level" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <ScrollArea className="max-h-52">
                    <SelectItem value="Primary 1">Primary 1</SelectItem>
                    <SelectItem value="Primary 2">Primary 2</SelectItem>
                    <SelectItem value="Primary 3">Primary 3</SelectItem>
                    <SelectItem value="Primary 4">Primary 4</SelectItem>
                    <SelectItem value="Primary 5">Primary 5</SelectItem>
                    <SelectItem value="Primary 6">Primary 6</SelectItem>
                    <SelectItem value="Secondary 1">Secondary 1</SelectItem>
                    <SelectItem value="Secondary 2">Secondary 2</SelectItem>
                    <SelectItem value="Secondary 3">Secondary 3</SelectItem>
                    <SelectItem value="Secondary 4">Secondary 4</SelectItem>
                  </ScrollArea>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-11/12 mx-auto lg:w-full text-lg font-extrabold py-7">
          Secure my slot
        </Button>
      </form>
    </Form>
  );
}

export default EnrollNowForm;
