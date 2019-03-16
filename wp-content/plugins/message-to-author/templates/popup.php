<?php $options = get_option('m2a_settings'); ?>
<?php if (isset($options['googlecaptcha']) && $options['googlecaptchapublickey']): ?>
    <script src="https://www.google.com/recaptcha/api.js"></script>
<?php endif; ?>
<style type="text/css">
    #my-content-id{height: auto;}
    .m2a-message input, .m2a-message textarea { margin: 2px 0px 15px; width: 100%; }
</style>
<div id="my-content-id" style="display: none;">
    <div class="m2a-message m2a-popup">
        <form class="form" method="post" action="<?= esc_url(admin_url('admin-post.php')) ?>">
            <input type="text" name="subject" placeholder="Subject" autocomplete="off">

            <?php if (!is_user_logged_in()): ?>
                <input type="email" name="user_email" placeholder="Email" >
            <?php endif; ?>

            <textarea name="message" placeholder="Message" rows="4"></textarea>
            <input type="hidden" name="action" value="m2a_new_message"/>
            <input type="hidden" name="post_id" value="<?= get_the_ID() ?>"/>

            <?php if (isset($options['googlecaptcha']) && $options['googlecaptchapublickey']): ?>
                <div class="g-recaptcha" data-sitekey="<?= $options['googlecaptchapublickey']; ?>"></div>
            <?php endif; ?>

            <input type="submit" class="button btn" name="submit_message" value="Send Message"/>
        </form>
    </div>
</div>
<a href="#TB_inline?width=auto&height=auto&inlineId=my-content-id" class="thickbox btn button">message me</a>