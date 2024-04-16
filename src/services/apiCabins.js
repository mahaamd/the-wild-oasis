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

export async function createEditCabin(newData) {
  // Check if there's an image in the incoming data and handle the upload

  //if (newData.image && newData.image[0]) {
  const imageName = `${Math.random()}-${newData.image[0].name}`.replace(
    "/",
    ""
  );
  const imagePath = `https://srkbaoptowgshssvcezg.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;

  // Prepare the data to be inserted
  const cabinData = { ...newData, image: imagePath };

  // Attempt to insert the new cabin into the database
  try {
    const { data, error } = await supabase.from("cabins").insert([cabinData]);
    if (error) {
      console.error(error.message);
      throw new Error("Cabin could not be added to the list");
    }
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Operation failed");
  }
}
