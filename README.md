[:gift_heart: Sponsor this project on Github](https://github.com/sponsors/hkgnp) or [:coffee: Get me a coffee](https://www.buymeacoffee.com/hkgnp.dev) if you like this plugin!

> The Logseq team is working on properties feature as part of the database version. As such, development on this plugin will be limited since properties will eventually replace the function offered by this plugin.

# Introduction

Designate selected tags as power tags, and see them auto-create properties are you use them!

![](./screenshots/demo.gif)

# Usage

## Creating Power Tags

1. Create a power tag by first going to a block with a tag that you would like to convert to a power tag and using `/Create power tag`.
2. Insert the necessary properties that you would want to associate with this power tag.
3. Now the next time you use the tag, your properties will be auto-added.

## Managing Your Tags

1. Click on the `#` icon on your plugin toolbar.
2. You will see a list of your created power tags.
3. You can then:
   - Delete a power tag
     - This will not affect **past** blocks created with the tag
   - Delete a property of a power tag
     - This will apply to **past** and **future** blocks created with the tag
   - Add a property of a power tag
     - This will apply to **past** and **future** blocks created with the tag
   - Apply the properties of a power tag to blocks created before the power tag
     - This will apply to **past** blocks created before the power tag

> 1st Important Note: Note that the last 3 functions are irreversible so please ensure that your graph is backed up and that you are sure before applying them.

> 2nd Important Note: Power tags are stored in the plugin settings. If the plugin settings file (found in `.logseq`) is deleted, you will need to manually create your power tags again.

# Installation

If not available from the marketplace, download the release and manually load it into Logseq after unzipping it.
