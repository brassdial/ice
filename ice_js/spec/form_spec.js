(function() {
  describe("Form Builder Tags", function() {
    describe("label_tag", function() {
      it("assigns default value", function() {
        var tag;
        tag = label_tag('name');
        return (expect(tag)).toEqual('<label for="name">Name</label>');
      });
      it("assigns humanized default value", function() {
        var tag;
        tag = label_tag('supervising_boss_id');
        return (expect(tag)).toEqual('<label for="supervising_boss_id">Supervising boss</label>');
      });
      it("allows alternative value", function() {
        var tag;
        tag = label_tag('name', 'Your Name');
        return (expect(tag)).toEqual('<label for="name">Your Name</label>');
      });
      return it("allows class to be assigned", function() {
        var tag;
        tag = label_tag('name', {
          'class': 'small_label'
        });
        return (expect(tag)).toEqual('<label class="small_label" for="name">Name</label>');
      });
    });
    describe("for password_field_tag", function() {
      it("should generate regular password tag", function() {
        var tag;
        tag = password_field_tag('pass');
        return (expect(tag)).toEqual('<input id="pass" name="pass" type="password" />');
      });
      it("should have alternate value", function() {
        var tag;
        tag = password_field_tag('secret', 'Your secret here');
        return (expect(tag)).toEqual('<input id="secret" name="secret" type="password" value="Your secret here" />');
      });
      it("should take class", function() {
        var tag;
        tag = password_field_tag('masked', {
          'class': 'masked_input_field'
        });
        return (expect(tag)).toEqual('<input class="masked_input_field" id="masked" name="masked" type="password" />');
      });
      it("should take size", function() {
        var tag;
        tag = password_field_tag('token', '', {
          size: 15
        });
        return (expect(tag)).toEqual('<input id="token" name="token" size="15" type="password" value="" />');
      });
      it("should take maxlength", function() {
        var tag;
        tag = password_field_tag('key', {
          maxlength: 16
        });
        return (expect(tag)).toEqual('<input id="key" maxlength="16" name="key" type="password" />');
      });
      it("should take disabled option", function() {
        var tag;
        tag = password_field_tag('confirm_pass', {
          disabled: true
        });
        return (expect(tag)).toEqual('<input disabled="disabled" id="confirm_pass" name="confirm_pass" type="password" />');
      });
      return it("should take multiple options", function() {
        var tag;
        tag = password_field_tag('pin', '1234', {
          maxlength: 4,
          size: 6,
          'class': 'pin-input'
        });
        return (expect(tag)).toEqual('<input class="pin-input" id="pin" maxlength="4" name="pin" size="6" type="password" value="1234" />');
      });
    });
    return describe("for check_box_tag", function() {
      it("should generate basic checkbox", function() {
        var tag;
        tag = check_box_tag('accept');
        return (expect(tag)).toEqual('<input id="accept" name="accept" type="checkbox" value="1" />');
      });
      it("should take alternate values", function() {
        var tag;
        tag = check_box_tag('rock', 'rock music');
        return (expect(tag)).toEqual('<input id="rock" name="rock" type="checkbox" value="rock music" />');
      });
      return it("should take parameter for checked", function() {
        var tag;
        tag = check_box_tag('receive_email', 'yes', true);
        return (expect(tag)).toEqual('<input checked="checked" id="receive_email" name="receive_email" type="checkbox" value="yes" />');
      });
    });
  });
}).call(this);
