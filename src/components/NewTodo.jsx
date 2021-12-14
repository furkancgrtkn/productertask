import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
export default function NewTodo({ setTodos }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setTodos((prev) => {
      return [...prev, { id: uuidv4(), ...data, do: false }];
    });
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm w-full px-5 mx-auto mt-4 flex flex-col"
    >
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700"
      >
        Title
      </label>
      <div className="mt-1">
        <input
          name="title"
          id="title"
          {...register("title", { required: true })}
          className="shadow-sm border block w-full p-2 text-sm border-gray-300 rounded-md"
        />
      </div>
      {errors.title && (
        <span className="text-xs mt-0.5 text-red-600">
          This field is required
        </span>
      )}
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700 mt-2"
      >
        Description
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="description"
          {...register("description", { required: true })}
          id="description"
          className="shadow-sm border block w-full p-2 text-sm border-gray-300 rounded-md"
          defaultValue={""}
        />
      </div>
      {errors.description && (
        <span className="text-xs mt-0.5 text-red-600">
          This field is required
        </span>
      )}
      <button
        type="submit"
        className="px-3 py-2 mt-2 mx-auto bg-indigo-700 text-white text-sm rounded"
      >
        Add New Todo
      </button>
    </form>
  );
}
