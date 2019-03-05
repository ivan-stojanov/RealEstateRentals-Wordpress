<?php
/*
@package verso
  =================
  Page Template
  =================
*/
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

  <div class="entry-content clearfix">

        <?php the_content(); ?>

        <?php
            $defaults = array(
                'before'           => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'verso-lite' ) . '</span>',
                'after'            => '</div>',
                'link_before'      => '',
                'link_after'       => '',
                'next_or_number'   => 'number',
                'separator'        => ' ',
                'nextpagelink'     => esc_html__( 'Next page', 'verso-lite' ),
                'previouspagelink' => esc_html__( 'Previous page', 'verso-lite' ),
                'pagelink'         => '%',
                'echo'             => 1
            );

            wp_link_pages( $defaults );
        ?>

  </div><!-- .entry-content -->

</article>
