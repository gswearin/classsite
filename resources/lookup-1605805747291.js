(function(window, undefined) {
  var dictionary = {
    "a69133ea-7086-4ec3-b86b-122484528f93": "LectureClass_STU",
    "5e38432d-4dac-4cfa-bf87-6aa0fd700b65": "Lecture_STU",
    "14b94927-c063-4ed9-81d4-1953711b9e8e": "Main_INS",
    "654fcb12-72ab-4253-ba04-aad2cb0a4ce3": "Choose_INS",
    "e4703e48-0917-46cb-9213-7d7d2eb44c18": "Edit_INS",
    "7ce461e7-be1a-41aa-9c34-30d7170d5b1f": "Login",
    "3a532e91-e54c-46ea-b409-957b43061a16": "Lecture_INS",
    "ae7b26ca-508f-4874-8bcb-9422a8003458": "Manage_INS",
    "d10a2ac9-0fd3-4963-9f17-b24d3e44a9a1": "Settings_INS",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main_STU",
    "5453a7c8-9d7a-4ee2-9f46-16cdc05f5379": "Settings_STU",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);