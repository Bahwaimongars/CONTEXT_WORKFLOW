import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Wireframe Generator
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Transform your user stories into beautiful wireframes using AI
          </p>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-muted-foreground"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Upload your user stories
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop your text file here, or click to browse
              </p>
              <Button>Choose File</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                1. Upload
              </h3>
              <p className="text-sm text-muted-foreground">
                Upload your text file containing user stories
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                2. Generate
              </h3>
              <p className="text-sm text-muted-foreground">
                AI processes your content and creates wireframes
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                3. Download
              </h3>
              <p className="text-sm text-muted-foreground">
                Download and use your generated wireframes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
