require "rubygems"
require "bundler/setup"

require "RMagick"
include Magick


desc "Generate thumbnails"
task "gen-thumbs" do
  orig_dir = "media/img/vystavy/orig/"
  thumb_dir = "media/img/vystavy/thumb/"
  small_dir = "media/img/vystavy/small/"

  rbfiles = File.join(orig_dir, "**", "*.{jpg,jpeg,png}")
  Dir.glob(rbfiles) do |filename|
    puts filename

    orig_img = Image.read(filename).first

    thumb_path = Pathname.new filename.gsub(orig_dir, thumb_dir)
    small_path = Pathname.new filename.gsub(orig_dir, small_dir)
    [thumb_path, small_path].each do |path|
      if !File.directory?(dir = path.dirname)
        FileUtils.mkdir_p(path.dirname)
        puts " - created directory: %s" % path.dirname
      end
    end

    thumb = orig_img.resize_to_fit(621, 100)
    thumb.write thumb_path
    puts " - thumb created: %s" % thumb_path

    small = orig_img.resize_to_fit(286, 600)
    small.write small_path
    puts " - small created: %s" % small_path
  end
end
