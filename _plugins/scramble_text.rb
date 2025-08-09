# frozen_string_literal: true
require 'nokogiri'

# ScrambleText plugin for Jekyll
# Adds a liquid tag {% scramble_text %}text{% endscramble_text %} that wraps each character
# in a span with the appropriate class for the scramble effect

module Jekyll
  class ScrambleTextTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.strip
    end

    def render(context)
      text = super.strip
      output = '<span class="scramble-text">'
      
      # Wrap each character in a span
      text.each_char.with_index do |char, i|
        # Replace spaces with non-breaking spaces
        display_char = char == ' ' ? '&nbsp;' : char
        output += "<span class=\"scramble-text__char\" style=\"--i: #{i};\">#{display_char}</span>"
      end
      
      output += '</span>'
      output
    end
  end
end

Liquid::Template.register_tag('scramble_text', Jekyll::ScrambleTextTag)