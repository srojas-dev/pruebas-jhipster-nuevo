package l.l.l;

import l.l.l.PruebaApp;
import l.l.l.config.AsyncSyncConfiguration;
import l.l.l.config.EmbeddedMongo;
import l.l.l.config.TestSecurityConfiguration;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.boot.test.context.SpringBootTest;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = {PruebaApp.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class})
@EmbeddedMongo
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_CLASS)
public @interface IntegrationTest {
}
