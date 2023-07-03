"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Balancer from "react-wrap-balancer";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Preferences } from "@prisma/client";

const formSchema = z.object({
  classificationModel: z.string({
    required_error: "Please select a model.",
  }),
  extractionModel: z.string({
    required_error: "Please select a model.",
  }),
  analysisModel: z.string({
    required_error: "Please select a model.",
  }),
  enableReceiptsOneShot: z.boolean(),
  enableInvoicesOneShot: z.boolean(),
  enableCardStatementsOneShot: z.boolean(),
});

export function PreferencesForm({ preferences }: { preferences: Preferences }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      classificationModel: preferences.classificationModel,
      extractionModel: preferences.extractionModel,
      analysisModel: preferences.analysisModel,
      enableReceiptsOneShot: !!preferences.receiptExampleExtractionId,
      enableInvoicesOneShot: !!preferences.invoiceExampleExtractionId,
      enableCardStatementsOneShot:
        !!preferences.cardStatementExampleExtractionId,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="border border-slate-200 rounded-lg p-4">
      <Form {...form}>
        <h2 className="font-bold text-slate-800 text-lg">
          Select Language Model
        </h2>
        <p className="text-slate-600">
          You can choose between multiple language models for each step of the
          data extraction process.
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
          {/* Text Classification */}
          <FormField
            control={form.control}
            name="classificationModel"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Text Classification</FormLabel>
                <Select
                  onValueChange={field.onChange as (value: string) => void}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Models</SelectLabel>
                      <SelectItem value="gpt-3.5-turbo">
                        gpt-3.5-turbo
                      </SelectItem>
                      <SelectItem value="gpt-3.5-turbo-16k">
                        gpt-3.5-turbo-16k
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription className="text-slate-500 text-xs w-4/5">
                  <Balancer>
                    The model classifies the text into the three main categories
                    available in the app. This task is handled very well by most
                    models.
                  </Balancer>
                  <span className="text-slate-400 text-xs mt-1 w-3/5 inline-block">
                    Recommended:{" "}
                    <span className="font-medium">gpt-3.5-turbo-16k</span>
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Data Extraction */}
          <FormField
            control={form.control}
            name="extractionModel"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Data Extraction</FormLabel>
                <Select
                  onValueChange={field.onChange as (value: string) => void}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Models</SelectLabel>
                      <SelectItem value="gpt-3.5-turbo">
                        gpt-3.5-turbo
                      </SelectItem>
                      <SelectItem value="gpt-3.5-turbo-16k">
                        gpt-3.5-turbo-16k
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription className="text-slate-500 text-xs w-3/5">
                  <Balancer>
                    The model is structuring the data from the text following a
                    schema of the chosen category. Models with larger context
                    window are better suited for the task if the provided
                    documents are long and complex.
                  </Balancer>
                  <span className="text-slate-400 text-xs mt-1 w-4/5 inline-block">
                    Recommended:{" "}
                    <span className="font-medium">gpt-3.5-turbo-16k</span>
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Analysis */}
          <FormField
            control={form.control}
            name="analysisModel"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Analysis</FormLabel>
                <Select
                  onValueChange={field.onChange as (value: string) => void}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Models</SelectLabel>
                      <SelectItem value="gpt-3.5-turbo-16k">
                        gpt-3.5-turbo-16k
                      </SelectItem>
                      <SelectItem value="gpt-4">gpt-4</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription className="text-slate-500 text-xs w-3/5">
                  <Balancer>
                    The model analyzes the extracted data to find errors by
                    comparing it to the schema and the original text. This task
                    should be handled by the most capable models to ensure the
                    best results and reduce inaccuracies.
                  </Balancer>
                  <span className="text-slate-400 text-xs mt-1 w-4/5 inline-block">
                    Recommended: <span className="font-medium">gpt-4</span>
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-6">
            <h2 className="font-bold text-slate-800 text-lg">
              One-Shot Learning
            </h2>
            <p className="text-slate-600">
              You can define an existing Data Extraction as example for the next
              extractions of the same category.
            </p>
            <p className="text-slate-500 text-xs mt-1 w-3/5">
              <Balancer>
                This feature can greatly improve the accuracy of the models if
                your documents are similar.
              </Balancer>
            </p>
            {/* Enable One-Shot Learning for Receipts */}
            <FormField
              control={form.control}
              name="enableReceiptsOneShot"
              render={({ field }) => (
                <FormItem className="flex gap-2 items-center mt-4">
                  <FormControl>
                    <Switch
                      className="-mb-2"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-readonly
                    />
                  </FormControl>
                  <FormLabel>Enable For Receipts</FormLabel>
                </FormItem>
              )}
            />
            {/* Enable One-Shot Learning for Invoices */}
            <FormField
              control={form.control}
              name="enableInvoicesOneShot"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-2 items-center mt-4">
                  <FormControl>
                    <Switch
                      className="-mb-2"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-readonly
                    />
                  </FormControl>
                  <FormLabel className="inline-block">
                    Enable For Invoices
                  </FormLabel>
                </FormItem>
              )}
            />
            {/* Enable One-Shot Learning for Card Statements */}
            <FormField
              control={form.control}
              name="enableCardStatementsOneShot"
              render={({ field }) => (
                <FormItem className="flex gap-2 items-center mt-4">
                  <FormControl>
                    <Switch
                      className="-mb-2"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-readonly
                    />
                  </FormControl>
                  <FormLabel>Enable For Card Statements</FormLabel>
                </FormItem>
              )}
            />
          </div>
          <Button className="w-40 mt-12" type="submit">
            Save Preferences
          </Button>
        </form>
      </Form>
    </div>
  );
}
