import supabase, { supabaseUrl } from "./supbase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw Error("cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw Error("cabins could not be deleted");
  }

  return data;
}

export async function createCabin(newData) {
  const imageName = `${Math.random()}-${newData.image[0].name}`.replace(
    "/",
    ""
  );

  const imagePath = `https://srkbaoptowgshssvcezg.supabase.co/storage/v1/object/sign/cabin-images/${imageName}`;

  console.log(imagePath);

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newData.image);

  if (storageError) {
    console.log(storageError.message);
    throw Error("the image could not be added to the storage");
  }

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newData, image: imagePath }])
    .select();

  if (error) {
    console.error(error.message);
    throw Error("cabins could not be added to list");
  }

  return data;
}
