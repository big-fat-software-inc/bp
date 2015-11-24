module.exports = {
  dev: {
    dest: "dist/manifest.json", // Destination file 
    options: {
      "manifest_version": 2,

      "name": "be productive",
      "description": "procrastinate less, produce more",
      "version": "1.0",

      "page_action": {
        "default_icon": "1447953221_hourglass.png",
        "default_popup": "index.html",
      },

      "permissions": [
        "activeTab",
        "http://*/",
        "https://*/"
      ],

      "content_scripts": [
        {
          "matches": [ "https://*/*", "http://*/*" ],
          "css": ["dist.my.css"],
          "js": ["dist.my.js"],
          "run_at": "document_end"
        }
      ]
    }
  },
  staging: {
    dest: "dist/manifest.json",
    options: {
    }
  },
}
